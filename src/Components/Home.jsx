import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";


function Home() {
  function foo(num) {
    return num % 3;
  }

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="counter">Counter</Navbar.Brand>
        <Navbar.Brand href="todolist">toDoList</Navbar.Brand>
        <Navbar.Brand href="wordle">Wordle</Navbar.Brand>
        <Navbar.Brand href="traffic">Traffic</Navbar.Brand>
        <Navbar.Brand href="wackamole">Wack-a-mole</Navbar.Brand>
        <Navbar.Brand href="matchgame">Match Copies Game</Navbar.Brand>


      </Container>
    </Navbar>
  );
}

export default Home;
