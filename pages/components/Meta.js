import Head from 'next/head'

export default function Meta(props) {
    return (
        <Head>
            <title>{props.title}</title>
            <meta name="description" content="Browse authentic culinaries." />
            <link rel="icon" href="/favicon.ico" />
        </Head>
    )
}
