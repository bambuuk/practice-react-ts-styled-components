import SpacerHeader from "./components/SpacerHeader";
import { CardContainer, CardLeftSide, CardRightSide } from "./components/CardContainer";
import Container from "./components/Container";
import Button from "./components/Button";
import parfume from './assets/chanel_perfume.png';

function App() {
    return (
        <Container>
            <CardContainer>
                <>
                    <CardLeftSide>
                        <img src={parfume} alt="plants and perfume" />
                    </CardLeftSide>
                    <CardRightSide>
                        <>
                            <div>
                                <SpacerHeader text="Perfume" />
                                <h2>
                                    Gabrielle
                                    <br /> Essence Eau
                                    <br /> De Parfum
                                </h2>
                                <p>
                                    A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator
                                    for the House of Chanel.
                                </p>

                                <div className="price-container">
                                    <h3>&euro;149,99</h3>
                                    <span>&euro;469,99</span>
                                </div>
                            </div>

                            <Button text='Add to cart' disabled />
                        </>
                    </CardRightSide>
                </>
            </CardContainer>
        </Container>
    );
}

export default App;
