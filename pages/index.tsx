
export default function Home() {
  return (
    <div className="bg-gray-500">
      <h3 className="font">Hi From {process.env.AUTHOR}</h3>
    </div>
  )
}
