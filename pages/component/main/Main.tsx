import type { NextPage } from 'next'
import { Col, Container, Grid, Row, Text, Image, Card, Button } from '@nextui-org/react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import style from "./Main.module.css"
const Main: NextPage = () => {
  return (
    <Grid.Container direction='row' justify='center' alignItems='center' alignContent='center' gap={2}>
      <Grid lg={12}>
        <Carousel showArrows={false} showStatus={false} className={style.row} autoPlay emulateTouch infiniteLoop interval={3000} useKeyboardArrows>
          <Grid.Container justify='center' alignItems='center' alignContent='center' gap={0} className={style.bgImagesText}>
            <Grid>
              <Text className={style.text} h1 color='#ffffff' size={35}>WELCOME&nbsp;TO</Text>
            </Grid>
            <Grid>
            <Text color='#ffffff' size={24}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris sit amet massa vitae tortor condimentum lacinia quis vel. Cursus mattis molestie a iaculis. Eleifend mi in nulla posuere sollicitudin aliquam. Et egestas quis ipsum suspendisse ultrices gravida. Magna etiam tempor orci eu. Risus viverra adipiscing at in. Dolor magna eget est lorem ipsum dolor sit. Vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare. Nunc sed augue lacus viverra vitae congue eu consequat ac. Ut sem nulla pharetra diam. Nulla pharetra diam sit amet. Scelerisque eleifend donec pretium vulputate sapien nec sagittis.</Text>
            </Grid>
          </Grid.Container>
          <div className={style.bgImagesText}>
            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris sit amet massa vitae tortor condimentum lacinia quis vel. Cursus mattis molestie a iaculis. Eleifend mi in nulla posuere sollicitudin aliquam. Et egestas quis ipsum suspendisse ultrices gravida. Magna etiam tempor orci eu. Risus viverra adipiscing at in. Dolor magna eget est lorem ipsum dolor sit. Vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare. Nunc sed augue lacus viverra vitae congue eu consequat ac. Ut sem nulla pharetra diam. Nulla pharetra diam sit amet. Scelerisque eleifend donec pretium vulputate sapien nec sagittis.</Text>
          </div>
        </Carousel>
      </Grid>

      <Grid lg={12}>
        <Carousel showArrows={true} showStatus={false} className={style.row} autoPlay emulateTouch infiniteLoop interval={3000} useKeyboardArrows>
          <Grid.Container justify='center' alignItems='center' alignContent='center' gap={0} className={style.adsImagesText}>
            <Grid>
              <Text className={style.text} h1 color='#ffffff' size={24}>ADS</Text>
            </Grid>
            <Grid>
            <Text color='#ffffff' size={12}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris sit amet massa vitae tortor condimentum lacinia quis vel. Cursus mattis molestie a iaculis. Eleifend mi in nulla posuere sollicitudin aliquam. Et egestas quis ipsum suspendisse ultrices gravida. Magna etiam tempor orci eu. Risus viverra adipiscing at in. Dolor magna eget est lorem ipsum dolor sit. Vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare. Nunc sed augue lacus viverra vitae congue eu consequat ac. Ut sem nulla pharetra diam. Nulla pharetra diam sit amet. Scelerisque eleifend donec pretium vulputate sapien nec sagittis.</Text>
            </Grid>
          </Grid.Container>
          <div className={style.adsImagesText}>
            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris sit amet massa vitae tortor condimentum lacinia quis vel. Cursus mattis molestie a iaculis. Eleifend mi in nulla posuere sollicitudin aliquam. Et egestas quis ipsum suspendisse ultrices gravida. Magna etiam tempor orci eu. Risus viverra adipiscing at in. Dolor magna eget est lorem ipsum dolor sit. Vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare. Nunc sed augue lacus viverra vitae congue eu consequat ac. Ut sem nulla pharetra diam. Nulla pharetra diam sit amet. Scelerisque eleifend donec pretium vulputate sapien nec sagittis.</Text>
          </div>
        </Carousel>
      </Grid>

      {/* Program */}
      <Grid lg={12}>
        <Text className={style.text} h1 color='#000000' size={24}>PROGRAM</Text>
      </Grid>

      <Grid lg={12}>
        <Grid.Container direction='row' justify='center' alignItems='center' alignContent='center' gap={2}>
          <Grid lg={6}>
          <Card cover css={{ w: "100%", p: 0 }}>
              <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
                <Col span={12}>
                  <Text color='#ffffff' className={style.text}>COURSE</Text>
                </Col>
              </Card.Header>
              <Card.Body>
                <Card.Image src='/party2.jpg' height={400} width="100%"/>
              </Card.Body>
              <Card.Footer css={{ position: "absolute", bgBlur: "#0f1114", borderTop: "$borderWeights$light solid $gray700", bottom: 0, zIndex: 1,}}>
                <Col span={6}>
                  <Text color='#ffffff' className={style.text}>PRICE</Text>
                </Col>
                <Col span={6}>
                  <Button>
                    <Text color='#ffffff' className={style.text}>DETAILS</Text>
                  </Button>
                </Col>
              </Card.Footer>
            </Card>
          </Grid>
          <Grid lg={6}>
          <Card cover css={{ w: "100%", p: 0 }}>
              <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
                <Col span={12}>
                  <Text color='#ffffff' className={style.text}>COURSE</Text>
                </Col>
              </Card.Header>
              <Card.Body>
                <Card.Image src='/party2.jpg' height={400} width="100%"/>
              </Card.Body>
              <Card.Footer css={{ position: "absolute", bgBlur: "#0f1114", borderTop: "$borderWeights$light solid $gray700", bottom: 0, zIndex: 1,}}>
                <Col span={6}>
                  <Text color='#ffffff' className={style.text}>PRICE</Text>
                </Col>
                <Col span={6}>
                  <Button>
                    <Text color='#ffffff' className={style.text}>DETAILS</Text>
                  </Button>
                </Col>
              </Card.Footer>
            </Card>
          </Grid>
          <Grid lg={6}>
          <Card cover css={{ w: "100%", p: 0 }}>
              <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
                <Col span={12}>
                  <Text color='#ffffff' className={style.text}>COURSE</Text>
                </Col>
              </Card.Header>
              <Card.Body>
                <Card.Image src='/party2.jpg' height={400} width="100%"/>
              </Card.Body>
              <Card.Footer css={{ position: "absolute", bgBlur: "#0f1114", borderTop: "$borderWeights$light solid $gray700", bottom: 0, zIndex: 1,}}>
                <Col span={6}>
                  <Text color='#ffffff' className={style.text}>PRICE</Text>
                </Col>
                <Col span={6}>
                  <Button>
                    <Text color='#ffffff' className={style.text}>DETAILS</Text>
                  </Button>
                </Col>
              </Card.Footer>
            </Card>
          </Grid>
          <Grid lg={6}>
          <Card cover css={{ w: "100%", p: 0 }}>
              <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
                <Col span={12}>
                  <Text color='#ffffff' className={style.text}>COURSE</Text>
                </Col>
              </Card.Header>
              <Card.Body>
                <Card.Image src='/party2.jpg' height={400} width="100%"/>
              </Card.Body>
              <Card.Footer css={{ position: "absolute", bgBlur: "#0f1114", borderTop: "$borderWeights$light solid $gray700", bottom: 0, zIndex: 1,}}>
                <Col span={6}>
                  <Text color='#ffffff' className={style.text}>PRICE</Text>
                </Col>
                <Col span={6}>
                  <Button>
                    <Text color='#ffffff' className={style.text}>DETAILS</Text>
                  </Button>
                </Col>
              </Card.Footer>
            </Card>
          </Grid>
        </Grid.Container>
      </Grid>

      {/* Talent */}
      <Grid lg={12}>
        <Text className={style.text} h1 color='#000000' size={24}>TALENT</Text>
      </Grid>

      <Grid.Container direction='row' justify='center' alignItems='center' alignContent='center'>
        {/* talent list */}
      </Grid.Container>
    </Grid.Container>
  )
}

export default Main