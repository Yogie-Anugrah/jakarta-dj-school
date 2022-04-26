import type { NextPage } from 'next'
import { Col, Container, Grid, Row, Text } from '@nextui-org/react'
import { linkList } from "../../constant/NavbarLinks";
import style from "./NavbarHeader.module.css"

const NavbarHeader: NextPage = () => {
  return (
    <Grid.Container justify='center' alignItems='center' alignContent='center' className={style.navigation} gap={2}>
        {
          linkList.map(item => {
            return(
              <Grid lg={(item.textLink === 'Logo') ? 3 : 1}>
                <Text className={style.link} key={item.key}>{item.textLink}</Text>
              </Grid>
            )
          })
        }
    </Grid.Container>
  )
}

export default NavbarHeader