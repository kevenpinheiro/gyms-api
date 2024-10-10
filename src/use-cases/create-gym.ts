import type { Gym } from '@prisma/client'
import type { GymsRepository } from '@/repositories/gyms-repository'

interface CreateGymUseCaseRequest {
  title: string
  description: string | null
  phone: string | null
  latitude: number
  longitude: number
}

interface CreateGymUserResponse {
  gym: Gym
}

export class CreateGymUseCase {
  constructor(private gymRepository: GymsRepository) {}

  async execute({
    title,
    description,
    phone,
    latitude,
    longitude,
  }: CreateGymUseCaseRequest): Promise<CreateGymUserResponse> {
    const gym = await this.gymRepository.create({
      title,
      description: description ?? '',
      phone: phone ?? '',
      latitude,
      longitude,
    })

    return {
      gym,
    }
  }
}
