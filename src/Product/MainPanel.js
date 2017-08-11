import React from 'react'
import styled from 'styled-components'
import Button from '../common/Button'
import { MobileTablet, Desktop } from '../common/responsive'
import ColorButton from './ColorButton'
import SizeHelpButton from './SizeHelpButton'
import SizeButton from './SizeButton'
import { FormattedNumber } from 'react-intl'

const MainPanel = styled.section`
  margin-top: 1rem;
  padding: 0 .5rem;
  padding-bottom: 3rem;
  font-family: Raleway, 'Helvetica Neue', Helvetica, Arial;
  @media screen and (min-width: 48rem) {
    margin-top: 0;
    padding: 0;
  }
`

const PriceAndIdWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  @media screen and (min-width: 48rem) {
    margin-bottom: 3rem;
  }
`

const Price = styled.h2`
  margin: 0;
  font-size: 1rem;
  line-height: 1.1875rem;
  @media screen and (min-width: 62rem) {
    margin-bottom: 2rem;
  }
`

const Id = styled.p`
  margin: 0;
  font-size: .75rem;
  line-height: .875rem;
`

const ColorName = styled.p`
  margin: 1rem 0;
  font-size: 0.75rem;
  line-height: 1rem;
`
const Size = ColorName

const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 1rem 0;
`
const SizeButtonContainer = ButtonContainer.extend``

const DeliveryTitle = styled.h3`
  margin: 0;
  margin-bottom: .25rem;
  line-height: .875rem;
  font-size: .75rem;
  font-family: Raleway, 'Helvetica Neue', Helvetica, Arial;
  font-weight: bold;
`

const DeliveryText = styled.p`
  margin: 0;
  line-height: 1.35;
  font-size: .75rem;
  font-family: Raleway, 'Helvetica Neue', Helvetica, Arial;
`

const Divider = styled.hr`
  margin-top: 2rem;
  margin-bottom: 1rem;
  border: none;
  border-bottom: 1px solid #c6c6c6;
`

export default function() {
  return (
    <MainPanel>
      <MobileTablet>
        <PriceAndIdWrapper>
          <Price>
            <FormattedNumber
              value={100000}
              style="currency"
              currency="RUB"
              currencyDisplay="symbol"
              minimumFractionDigits={0}
            />
          </Price>
          <Id>Item 39428531</Id>
        </PriceAndIdWrapper>
        <ColorName>Colour: Honey</ColorName>
        <ButtonContainer>
          <ColorButton name="black" value="#232122" />
          <ColorButton name="honey" value="#cfa880" active />
        </ButtonContainer>
        <Divider />
        <ButtonContainer>
          <Button primary type="button">
            Select a size
          </Button>
          <Button type="button">Find in store</Button>
          <SizeHelpButton type="button">Need size help?</SizeHelpButton>
        </ButtonContainer>
      </MobileTablet>
      <Desktop>
        <div className="row">
          <div className="col-lg-12">
            <Price>
              <FormattedNumber
                value={100000}
                style="currency"
                currency="RUB"
                currencyDisplay="symbol"
                minimumFractionDigits={0}
              />
            </Price>
          </div>
          <div className="col-lg-6">
            <ColorName>
              Colour: <b>Honey</b>
            </ColorName>
            <ButtonContainer>
              <ColorButton name="black" value="#232122" />
              <ColorButton name="honey" value="#cfa880" active />
            </ButtonContainer>
          </div>
          <div className="col-lg-6">
            <Size>
              Size: <b>XL</b>
            </Size>
            <SizeButtonContainer>
              <SizeButton>S</SizeButton>
              <SizeButton>M</SizeButton>
              <SizeButton>L</SizeButton>
              <SizeButton>XL</SizeButton>
            </SizeButtonContainer>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <ButtonContainer>
              <Button primary type="button">
                Add to bag
              </Button>
            </ButtonContainer>
          </div>
          <div className="col-lg-6">
            <ButtonContainer>
              <Button type="button">Find in store</Button>
            </ButtonContainer>
          </div>
          <div className="col-lg-12">
            <DeliveryTitle>Free Next Day Delivery</DeliveryTitle>
            <DeliveryText>
              Order before 7pm Monday to Thursday for delivery the next day
            </DeliveryText>
          </div>
        </div>
      </Desktop>
    </MainPanel>
  )
}
