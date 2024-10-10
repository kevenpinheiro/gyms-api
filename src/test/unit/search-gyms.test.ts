import { InMemoryGymsRepository } from '@/repositories/in-memory/in-memory-gyms-repository'
import { SearchGymsUseCase } from '@/use-cases/search-gyms'
import { beforeEach, describe, expect, it } from 'vitest'

let gymsRepository: InMemoryGymsRepository
let sut: SearchGymsUseCase

describe('Search Gyms Use Case', () => {
  beforeEach(async () => {
    gymsRepository = new InMemoryGymsRepository()
    sut = new SearchGymsUseCase(gymsRepository)
  })

  it('should be able to search for gyms', async () => {
    await gymsRepository.create({
      title: 'Andre Sports',
      description: '',
      phone: '',
      latitude: -23.4416832,
      longitude: -46.7402752,
    })

    await gymsRepository.create({
      title: 'B12',
      description: '',
      phone: '',
      latitude: -23.4416832,
      longitude: -46.7402752,
    })

    const { gyms } = await sut.execute({
      query: 'Andre Sports',
      page: 1,
    })

    expect(gyms).toHaveLength(1)
    expect(gyms).toEqual([expect.objectContaining({ title: 'Andre Sports' })])
  })

  it('should be able to fetch paginated gyms search', async () => {
    for (let i = 1; i <= 22; i++) {
      await gymsRepository.create({
        title: `SmartFit Gym ${i}`,
        description: '',
        phone: '',
        latitude: -23.4416832,
        longitude: -46.7402752,
      })
    }

    const { gyms } = await sut.execute({
      query: 'SmartFit',
      page: 2,
    })

    expect(gyms).toHaveLength(2)
    expect(gyms).toEqual([
      expect.objectContaining({ title: 'SmartFit Gym 21' }),
      expect.objectContaining({ title: 'SmartFit Gym 22' }),
    ])
  })
})
