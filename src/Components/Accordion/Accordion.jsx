import { Disclosure } from "@headlessui/react";

function Accordion({title, children}) {
  return (
    <Disclosure>
      <Disclosure.Button className="py-2">
        {title}
      </Disclosure.Button>
      <Disclosure.Panel className="text-gray-500">
        {children}
      </Disclosure.Panel>
    </Disclosure>
  );
}

export default Accordion
