/* eslint-disable @typescript-eslint/no-unused-vars */
import { toast } from "sonner";
import { useMutation, useQueryClient } from "@tanstack/react-query";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {InferResponseType } from "hono";

import { client } from "@/lib/rpc";
import { useRouter } from "next/navigation";

type ResponseType = InferResponseType<typeof client.api.auth.logout["$post"]>;

// type RequestType = InferRequestType<typeof client.api.auth.logout["$post"]>;

export const useLogout=() =>{
    const router = useRouter();
    const queryClient = useQueryClient();
    
    
    const mutation = useMutation<
    ResponseType,
    Error
    // RequestType
    >({
        mutationFn: async()=>{
            const response = await client.api.auth.logout["$post"]();

            if(!response.ok){
                throw new Error("Failed to logout");
            }
            return await response.json();
        },

        onSuccess:()=>{
            toast.success("Logged out");
            router.refresh();
            queryClient.invalidateQueries();
        },
        onError: ()=>{
            toast.error("Failed to logout");
        },
    });


    return mutation;
};