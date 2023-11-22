/* eslint-disable react-hooks/exhaustive-deps */
import { useLocalSearchParams } from 'expo-router'
import { useState, useEffect, useRef } from 'react'
import { Animated } from 'react-native'

import { API_URL } from '../utils/apiURL'
import { api } from '../utils/axios'
import { StickyHeader } from '../components/Movie/StickyHeader/StickyHeader'
import { MovieType } from '../types/MovieType'
import { apiKey } from '../utils/envVariables'
import { Banner } from '../components/Movie/Banner'
import { MovieDetails } from '../components/Movie/MovieDetails'

export function Movie() {
  const { id } = useLocalSearchParams()
  const [data, setData] = useState<MovieType>()

  const scrollY = useRef(new Animated.Value(0)).current
  const scrollInterpolations = {
    headerTranslateY: scrollY.interpolate({
      inputRange: [0, 200],
      outputRange: [0, 200],
      extrapolate: 'clamp',
    }),
    headerBackgroundColor: scrollY.interpolate({
      inputRange: [0, 200],
      outputRange: ['rgba(0, 0, 0, 0)', '#2E2F33'],
      extrapolate: 'clamp',
    }),
    backBackgroundColor: scrollY.interpolate({
      inputRange: [0, 200],
      outputRange: ['#16171B', '#EC8B00'],
      extrapolate: 'clamp',
    }),
    titleOpacity: scrollY.interpolate({
      inputRange: [0, 200],
      outputRange: [0, 1],
      extrapolate: 'clamp',
    }),
  }

  async function getMovie() {
    try {
      const { data } = await api.get(
        `${API_URL}movie/${id}?language=pt-BR&api_key=${apiKey}`,
      )
      setData(data)
    } catch (error) {
      console.log(`Erro ao chamar a API: ${error}`)
    }
  }

  useEffect(() => {
    getMovie()
  }, [])

  return (
    <Animated.ScrollView
      onScroll={Animated.event(
        [{ nativeEvent: { contentOffset: { y: scrollY } } }],
        { useNativeDriver: false },
      )}
      scrollEventThrottle={16}
      className="h-screen w-full bg-brqNeutral"
    >
      {data && (
        <>
          <StickyHeader
            backBackgroundColor={scrollInterpolations.backBackgroundColor}
            headerBackgroundColor={scrollInterpolations.headerBackgroundColor}
            headerTranslateY={scrollInterpolations.headerTranslateY}
            titleOpacity={scrollInterpolations.titleOpacity}
            title={data.title}
            movieId={Number(id)}
          />

          <Banner poster_path={data.poster_path} />

          <MovieDetails title={data.title} overview={data.overview} />
        </>
      )}
    </Animated.ScrollView>
  )
}
