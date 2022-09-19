import './App.css';
import {  createRestaueant, deleteRestaueant} from './graphql/mutations'
import {  listRestaueants } from './graphql/queries'
import { withAuthenticator, Button, Text, Flex, Heading, TextField  } from "@aws-amplify/ui-react";
import { useCallback, useEffect, useState } from 'react';
import { API } from 'aws-amplify';

function App({ signOut }) {
  const [name,setName] = useState("name");
  const [description,setDescription] = useState("description");
  const [address,setAddress] = useState("address");
  const [ restaurants, setRestaurants ] = useState([]);

  const fetchRestaurants = useCallback(async () => {
    const result = await API.graphql({
      query: listRestaueants,
      authMode: 'AMAZON_COGNITO_USER_POOLS'
    })
    setRestaurants(result.data.listRestaurants.items)
  }, [setRestaurants])

  const handleCreateRestaurant = useCallback(async () => {
    await API.graphql({
      query: createRestaueant,
      variables: { name:name,description:description,address:address },
      authMode: 'AMAZON_COGNITO_USER_POOLS'
    })
    fetchRestaurants()
  }, [fetchRestaurants])

  const handleDeleteRestaurant = useCallback(async (id) => {
    await API.graphql({
      query: deleteRestaueant,
      variables: { input: { id: id } },
      authMode: 'AMAZON_COGNITO_USER_POOLS'
    })
    fetchRestaurants()
  }, [fetchRestaurants])

  useEffect(() => {
    fetchRestaurants()
  }, [fetchRestaurants])

  return (
    <Flex direction={"column"}>
      <Flex justifyContent={'space-between'}>
        <Heading level={1}>Restaurants</Heading>
        <Button onClick={signOut}>Sign Out</Button>
      </Flex>
      {restaurants.map(restaurant => <Flex alignItems={'center'}>
        <Text>{restaurant.text}</Text>
        
        <Button onClick={() => handleDeleteRestaurant(restaurant.id)}>Remove</Button>
      </Flex>)}
      <Flex
          direction="row"
          justifyContent="center"
          alignItems="center"
          alignContent="center"
          wrap="nowrap"
          gap="1rem"
        >
          <TextField
            placeholder={name}
            onChange={setName}
          />
          <TextField
            placeholder={description}
            onChange={setDescription}
          />
          <TextField
            placeholder={address}
            onChange={setAddress}
          />
        </Flex>
      <Button onClick={handleCreateRestaurant}>Add Restaurant</Button>
    </Flex>
  );
}

export default withAuthenticator(App);