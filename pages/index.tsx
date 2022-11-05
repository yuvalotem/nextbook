import { Grid } from '@mui/material'
import Head from 'next/head'
import { Posts } from '../components'

export default function Home() {
  return (
    <div >
      <Head>
        <title>Nextbook</title>
        <meta name="description" content="Facebook mock with next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Grid container>
        <Grid item xs={4}>
          <h3>groups info</h3>
        </Grid>
        <Grid item xs={6}>
          <Posts />
        </Grid>
        <Grid item xs={2}>
          <h3>more options</h3>
        </Grid>
      </Grid>
    </div>
  )
}

export const getServerSideProps = () => {
  return {
    props: {}
  }
}
