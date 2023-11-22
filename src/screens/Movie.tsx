/* eslint-disable react-hooks/exhaustive-deps */
import { useLocalSearchParams } from 'expo-router'
import { useRef } from 'react'
import { Animated } from 'react-native'
import { useQuery } from '@tanstack/react-query'

import { StickyHeader } from '../components/Movie/StickyHeader/StickyHeader'
import { MovieType } from '../types/MovieType'
import { Banner } from '../components/Movie/Banner'
import { MovieDetails } from '../components/Movie/MovieDetails'
import { GroupLabels } from '../components/Movie/GroupLabels/GroupLabels'
import { getMovie } from '../api/getMovie'
import { BannerSkeleton } from '../components/Movie/BannerSkeleton'
import { MovieDetailsSkeleton } from '../components/Movie/MovieDetailsSkeleton'

export function Movie() {
  const { id } = useLocalSearchParams()

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

  const { data, isLoading } = useQuery<MovieType>({
    queryKey: ['movies', { movieId: id }],
    queryFn: () => getMovie(Number(id)),
  })

  return (
    <Animated.ScrollView
      onScroll={Animated.event(
        [{ nativeEvent: { contentOffset: { y: scrollY } } }],
        { useNativeDriver: false },
      )}
      scrollEventThrottle={16}
      className="h-screen w-full bg-brqNeutral"
    >
      {isLoading ? (
        <>
          <StickyHeader
            backBackgroundColor={scrollInterpolations.backBackgroundColor}
            headerBackgroundColor={scrollInterpolations.headerBackgroundColor}
            headerTranslateY={scrollInterpolations.headerTranslateY}
            titleOpacity={scrollInterpolations.titleOpacity}
            title=""
            movieId={9999}
          />
          <BannerSkeleton />
          <MovieDetailsSkeleton />
        </>
      ) : (
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

      <GroupLabels />
    </Animated.ScrollView>
  )
}
