import React from 'react';
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom';

const navigation = [
  { name: 'Dashboard', href: '#', current: true },
  { name: 'Campagnes', href: '/CampagnesPage', current: false },
  { name: 'Station de surveillance', href: '/', current: false },
  { name: 'Administration', href: '/Administration', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  
  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="h-8 w-auto"
                    src="data:image/png;base64,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"
                    alt="Your Company"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'rounded-md px-3 py-2 text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  type="button"
                  className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>

                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Your Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Sign out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
 }