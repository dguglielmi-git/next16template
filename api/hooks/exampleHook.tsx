
  import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { exampleGetAll, exampleGetById, examplePatch, examplePost } from '../services/exampleService'
import { ExamplePatchData, ExamplePostData } from '../types/exampleTypes'
  
const useExampleGetById = (id: string) => {
    const {
      isFetching: isFetchingExampleGetById,
      data: dataExampleGetById,
      error: errorExampleGetById,
      refetch: refetchExampleGetById
    } = useQuery({
      queryKey: ['exampleGetById'],
      queryFn: async () => await exampleGetById(id),
      enabled: id !== '',
      staleTime: 30000,
      refetchOnWindowFocus: false
    })
  
    return {
        isFetchingExampleGetById,
        dataExampleGetById,
        errorExampleGetById,
        refetchExampleGetById        
    }
  }
  
  const useExampleGetAll = () => {
    const {
      isFetching: isFetchingExampleGetAll,
      data: dataExampleGetAll,
      error: errorExampleGetAll,
      refetch: refetchExampleGetAll
    } = useQuery({
      queryKey: ['exampleGetAll'],
      queryFn: async () => await exampleGetAll(),
      staleTime: 30000,
      refetchOnWindowFocus: false
    })
  
    return {
        isFetchingExampleGetAll,
        dataExampleGetAll,
        errorExampleGetAll,
        refetchExampleGetAll        
    }
  }  

  
  const useExamplePost = () => {
    const queryClient = useQueryClient()
    const { mutate: saveData, isPending: isSavingData } =
      useMutation({
        mutationFn: (dataToPost: ExamplePostData) =>
          examplePost(dataToPost),
        onSuccess: (_, request) => {
          queryClient.invalidateQueries({
            queryKey: ['examplePost']
          })
        }
      })
  
    return { saveData, isSavingData }
  }
  
  const useExamplePatch = () => {
    const queryClient = useQueryClient()
    const { mutateAsync: runPatch, isPending: isRunningPatch } =
      useMutation({
        mutationFn: (data: ExamplePatchData) =>
            examplePatch(data.id, data.data),
        onSuccess: (_, request) => {
          queryClient.invalidateQueries({
            queryKey: [request.id]
          })
        }
      })
  
    return { runPatch, isRunningPatch }
  }
  
  export {
    useExampleGetById,
    useExampleGetAll,
    useExamplePost,
    useExamplePatch,
  }
  