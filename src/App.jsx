// Haga la importaciones necesarias como dice el documento


//searchRobots()

function App() {
  // Cree un estado robots de tipo ([]) utilizando useState
  
  // Construya una funcions handleSubmit asyncrona que recibe como paramentro term
  // y sigua las instrucciones del documento 

  return (
    <>
      <h1>My Robots</h1>
      <SearchBar onSubmit={handleSubmit} />
      <RobotsList robots={robots} />
    </>
  )
}

export default App
