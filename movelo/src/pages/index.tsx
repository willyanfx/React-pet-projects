import Link from "next/link";
import { CompletedChallenges } from "../components/CompletedChallenges";
import { ExperienceBar } from "../components/ExperienceBar";
import Layout from "../components/Layout";

const IndexPage = () => (
    <Layout title='Movelo 👋'>
        <ExperienceBar />
        <CompletedChallenges />
    </Layout>
);

export default IndexPage;
