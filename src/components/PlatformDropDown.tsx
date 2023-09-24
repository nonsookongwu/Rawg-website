import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import usePlatforms, { Platform } from '../Custom hooks/usePlatform'
import { BsChevronDown } from 'react-icons/bs';


interface Props{
    onSelectPlatform: (platform: Platform) => void;
    selectedPlaform: Platform | null
}

const PlatformDropDown = ({onSelectPlatform, selectedPlaform}:Props) => {
    const { data, error } = usePlatforms()
    

if (error) return null
  return (
    <>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
         { selectedPlaform?.name ? selectedPlaform.name : "Platforms"}
        </MenuButton>
        <MenuList>
          {data?.results.map((platform) => (
              <MenuItem
                  onClick={()=> onSelectPlatform(platform)}
                  key={platform.id}>
              {platform.name}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </>
  );
}

export default PlatformDropDown