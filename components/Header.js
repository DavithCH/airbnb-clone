import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

import { DateRangePicker } from 'react-date-range';

import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  UsersIcon,
} from '@heroicons/react/solid';

const Header = ({ placeholder }) => {
  const [searchInput, setSearchInput] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [numberOfGuests, setNumberOfGuests] = useState(1);
  const [isClose, setIsClose] = useState(false);
  const router = useRouter();

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: 'selection',
  };

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const resetInput = () => {
    setSearchInput('');
  };

  const handleClickSearch = () => {
    router.push({
      pathname: '/search',
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        numberOfGuests: numberOfGuests,
      },
    });
    setIsClose(true);
  };

  const handleClickRedirectHome = (event) => {
    event.preventDefault();
    router.push('/');
  };

  const searchCheck = () => {
    if (!searchInput) {
      return setIsClose(false);
    }
    return setIsClose(true);
  };

  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
      <div
        className="relative flex items-center h-10 cursor-pointer my-auto"
        onClick={(e) => handleClickRedirectHome(e)}
      >
        <Image
          src="https://links.papareact.com/qd3"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>

      <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm md:hover:shadow-md">
        <input
          className="outline-none pl-5 bg-transparent flex-grow text-xs text-gray-900"
          type="text"
          placeholder={placeholder || 'Where and when you want to go?'}
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <SearchIcon className="h-8  md:mx-2 bg-red-400 text-white rounded-full p-2 cursor-pointer hidden md:inline-flex" />
      </div>

      <div className="flex items-center space-x-2 justify-end text-gray-500 ">
        <p className="text-sm text-nowrap hover:bg-gray-100 p-3 rounded-full hidden md:inline font-semibold">
          Become a host
        </p>
        <GlobeAltIcon className="h-10 hover:bg-gray-100 p-2 rounded-full" />
        <div className="flex items-center space-x-2 border-2 border-gray-300 p-2 rounded-full hover:shadow-md">
          <MenuIcon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>

      {searchInput && (
        <div className="py-4 flex-col col-span-3 mx-auto">
          <DateRangePicker
            ranges={[selectionRange]}
            onChange={(ranges) => handleSelect(ranges)}
            minDate={new Date()}
            rangeColors={['#fd5b61']}
          />
          <div className="flex items-center border-b mb-4">
            <h2 className="text-xl flex-grow font-semibold text-red-500">
              Number of guests :
            </h2>
            <UsersIcon className="h-5 text-red-500" />
            <input
              className="w-12 pl-2 outline-none text-md text-red-500"
              type="number"
              min={1}
              value={numberOfGuests}
              onChange={(e) => {
                setNumberOfGuests(e.target.value);
              }}
            />
          </div>

          <div className="flex">
            <button
              className="flex-grow button_1 hover:bg-red-300 hover:text-gray-900 hover:border-none"
              onClick={resetInput}
            >
              Cancel
            </button>
            <button
              className="flex-grow button_1 hover:bg-red-300 hover:text-gray-900 hover:border-none"
              onClick={() => handleClickSearch()}
            >
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
