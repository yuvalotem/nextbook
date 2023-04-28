import useSWR from 'swr'


const fetcher = (...args) => fetch(...args).then((res) => res.json())

export const useFetchData = <Type>(url: string) => {
    return useSWR<Type, Error>(url, fetcher)
}