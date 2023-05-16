import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";

export default function MenuDropdown({ button, options, handleOption }) {
  return (
    <Menu>
      <MenuHandler >
        <Button variant="text" className="text-gray-700">{button}</Button>
      </MenuHandler>
      <MenuList className="z-10">
        {options?.map((item) => {
          return <MenuItem onClick={() => handleOption(item.name)} key={item?.name}>{item.name}</MenuItem>;
        })}
        {/* <MenuItem>Menu Item 1</MenuItem>
        <MenuItem>Menu Item 2</MenuItem>
        <MenuItem>Menu Item 3</MenuItem> */}
      </MenuList>
    </Menu>
  );
}
