import { FiEye } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";

import './table.css'

const TableContents = () => {
  return (
    <div className="overflow-x-auto rounded-xl my-10">
      <table className="w-[100%]">
        <thead>
          <tr>
            <th>Title</th>
            <th>Category</th>
            <th>Status</th>
            <th>Details</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          
          <tr className="duration-300">
            <td>Time Events </td>
            <td>Work</td>
            <td>Archived</td>
            <td><button className='flex justify-center items-center button1  cursor-pointer  hover:bg-[var(--primary-color)] w-full py-2'><FiEye className="h-full text-xl" /></button></td>
            <td><button className='flex justify-center items-center cursor-pointer button1  hover:bg-[var(--primary-color)] w-full py-2'><MdDeleteOutline className="h-full text-xl" /></button></td>
           
          </tr>
          <tr className="duration-300">
            <td>Time Events </td>
            <td>Work</td>
            <td>Archived</td>
            <td><button className='flex justify-center items-center button1  cursor-pointer  hover:bg-[var(--primary-color)] w-full py-2'><FiEye className="h-full text-xl" /></button></td>
            <td><button className='flex justify-center items-center cursor-pointer button1  hover:bg-[var(--primary-color)] w-full py-2'><MdDeleteOutline className="h-full text-xl" /></button></td>
           
          </tr>
          <tr className="duration-300">
            <td>Time Events </td>
            <td>Work</td>
            <td>Archived</td>
            <td><button className='flex justify-center items-center button1  cursor-pointer  hover:bg-[var(--primary-color)] w-full py-2'><FiEye className="h-full text-xl" /></button></td>
            <td><button className='flex justify-center items-center cursor-pointer button1  hover:bg-[var(--primary-color)] w-full py-2'><MdDeleteOutline className="h-full text-xl" /></button></td>
           
          </tr>
          
          
          
          
        </tbody>
      </table>
    </div>
  );
};

export default TableContents;
