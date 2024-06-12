import React, { Fragment, useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Menu, Transition } from "@headlessui/react";
import EditCampagne from "./EditCampagne";

function ButtonMenu({ item, category, onChangeCategory, onDelete, onEdit, data, setUpdateFlag, updateFlag }) {
  const [open, setOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const menuRef = useRef(null);

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleDelete = async () => {
    try {
      await onDelete(item.id_campagne);
      setOpen(false);
    } catch (error) {
      console.error("Error deleting campagne:", error);
    }
  };

  return (
    <Menu as="div" className="relative inline-block text-left" ref={menuRef}>
      <div>
        <Menu.Button
          className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          onClick={() => setOpen(!open)}
        >
          <svg
            className="w-6 h-6 text-gray-800 dark:text-black"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth="2"
              d="M5 7h14M5 12h14M5 17h14"
            />
          </svg>
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        show={open}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? "bg-gray-100" : ""
                  } block px-4 py-2 text-sm text-gray-700`}
                  onClick={() => {
                    onChangeCategory(item, category === "Initialise" ? "Clôturées" : "Archivées");
                    setOpen(false);
                  }}
                >
                  {category === "Initialise" ? "Clôturer" : "Archiver"}
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <>
                <button 
                  onClick={() => setShowModal(true)} 
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Edit
                </button>
                <EditCampagne showModal={showModal}
                 setShowModal={setShowModal}
                  item={data}
                  setOpen={setOpen}
                  updateFlag={updateFlag}
                  setUpdateFlag={setUpdateFlag}
                  />
                </>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? "bg-gray-100" : ""
                  } block px-4 py-2 text-sm text-gray-700`}
                  onClick={handleDelete}
                >
                  Supprimer
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  to={`/VoirPlus/${data.id_campagne}`}
                  className={`${
                    active ? "bg-gray-100" : ""
                  } block px-4 py-2 text-sm text-gray-700`}
                >
                  Voir plus
                </Link>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

export default ButtonMenu;

