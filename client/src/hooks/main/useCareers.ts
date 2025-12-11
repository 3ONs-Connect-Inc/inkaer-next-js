import { createCareerPost, deleteCareerPost, getCareersMeta, listCareerPosts, updateCareerPost, upsertCareersMeta } from '@/firebase/main/careersService'
import type { CareerPost, CareersMeta } from '@/types/types'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'

export function useCareerPosts() {
return useQuery({ queryKey: ['careers'], queryFn: listCareerPosts })
}


export function useCreateCareer() {
const qc = useQueryClient()
return useMutation({
mutationFn: (p: Omit<CareerPost, 'id' | 'createdAt' | 'updatedAt'>) => createCareerPost(p),
onSuccess: () => qc.invalidateQueries({ queryKey: ['careers'] }),
})
}  


export function useUpdateCareer() {
const qc = useQueryClient()
return useMutation({
mutationFn: ({ id, data }: { id: string; data: Partial<CareerPost> }) => updateCareerPost(id, data),
onSuccess: () => qc.invalidateQueries({ queryKey: ['careers'] }),
})
}


export function useDeleteCareer() {
const qc = useQueryClient()
return useMutation({
mutationFn: (id: string) => deleteCareerPost(id),
onSuccess: () => qc.invalidateQueries({ queryKey: ['careers'] }),
})
}


export function useCareersMeta() {
return useQuery({ queryKey: ['careersMeta'], 
    queryFn: getCareersMeta
})
}
  

export function useUpsertCareersMeta() {
const qc = useQueryClient()
return useMutation({
mutationFn: (p: Omit<CareersMeta, 'id' | 'updatedAt'>) => upsertCareersMeta(p),
onSuccess: () => qc.invalidateQueries({ queryKey: ['careersMeta'] }),
})
}