
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/ >}/>
          <Route index element={<AboutMe/ >}/>
          <Route index element={<Contact/ >}/>
          <Route index element={<Projects/ >}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
