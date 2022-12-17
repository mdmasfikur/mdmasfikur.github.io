import { useRouter } from "next/router";

export default function Features() {
    const router = useRouter();
    const feature = router.query.feature;
    return (
        <h3>Feature: {feature}</h3>
    );
}