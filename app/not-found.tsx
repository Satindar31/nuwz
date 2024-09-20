import Container from "@/components/page/Container";

export default function NotFound() {
  return (
    <Container className="items-center justify-center gap-4 pt-16">
      <h1 className="md:text-9xl text-6xl text-primary font-bold">404</h1>
      <p className="md:text-2xl text-base">Not Found</p>
    </Container>
  )
}