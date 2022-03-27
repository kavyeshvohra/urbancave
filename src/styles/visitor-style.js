import styled from "styled-components";

export const Container = styled.div`
   display: flex;
   flex-direction: row;
   column-gap: 6em;
   margin-top: 2em;
   flex-wrap: wrap;
   justify-content: center;
   row-gap: 2em;
`
export const Item = styled.div`
   border: 2px dashed #fab6b6;
   display: flex;
   flex-direction: column;
   padding: 15px;
   max-width: 50%;
   align-items: center;
   row-gap: 1em;

`
export const Title = styled.div`
`
export const Image = styled.image`

`
export const UserImage = styled.div`
    border-radius: 50%;
    overflow: hidden;
    width: 100px;
    height: 100px;
`
export const Heading6 = styled.h6`
    margin-top: 0.5em;
`