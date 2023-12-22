import Container from "./Container"
export default function HomePage() {
  return (
    <div className="relative w-full min-h-screen bg-top bg-no-repeat bg-contain bg-bg-light dark:bg-bg-dark">
        <img
        src="/hand-drawn-flat-winter-landscape-illustration.jpg"
        alt="image light"
        className="absolute z-0 object-cover opacity-60 w-full sm:block"
        style={{ height: "250px" }}
        />
        <Container />
    </div>
  )
}
