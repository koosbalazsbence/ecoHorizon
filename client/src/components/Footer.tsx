const Footer = () => {
  const date = new Date().getFullYear()
  return (
    <footer className="mt-auto py-3 fixed bottom-0 w-full h-16 p-3">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <hr className="w-4/5 mx-auto" />
        <p className="text-sm text-center pt-3">
          <span className="font-mono">&#169;{date} - ecoHorizon.com</span>
        </p>
      </div>
    </footer>
  )
}

export default Footer
