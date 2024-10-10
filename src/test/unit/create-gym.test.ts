import { InMemoryGymsRepository } from '@/repositories/in-memory/in-memory-gyms-repository'
import { CreateGymUseCase } from '@/use-cases/create-gym'
import { beforeEach, describe, expect, it } from 'vitest'

let gymsRepository: InMemoryGymsRepository
let sut: CreateGymUseCase

describe('Create Gym Use Case', () => {
  beforeEach(() => {
    gymsRepository = new InMemoryGymsRepository()
    sut = new CreateGymUseCase(gymsRepository)
  })

  it('should be able to create  gym ', async () => {
    const { gym } = await sut.execute({
      title: 'Andre Sports',
      description: null,
      phone: null,
      latitude: -23.4416832,
      longitude: -46.7402752,
    })

    expect(gym.id).toEqual(expect.any(String))
  })
})
