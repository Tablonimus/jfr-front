import React from "react";

const CardAdminEvent = ({ event, onDelete, onEdit }) => {
  const { title, description, date, time, location, image } = event;
  return (
    <div className="w-full">
      <article>
        <h6>{title}</h6>
        <p>{description}</p>
      </article>
      <div className="flex justify-between">
        <p>{date}</p>
        <p>{time}</p>
      </div>
      <div className="flex justify-evenly items-center text-sky-800 mr-2">
        <div
          onClick={onEdit}
          className="flex items-center gap-2 text-[1rem] cursor-pointer hover:scale-105 hover:text-whiteCustom duration-500"
        >
          <i className="bx bxs-edit-alt text-3xl"></i>
          Editar
        </div>
        <div
          onClick={onDelete}
          className="flex items-center gap-2 text-[1rem] cursor-pointer hover:scale-105 hover:text-whiteCustom duration-500"
        >
          <i className="bx bxs-trash-alt text-3xl"></i>
          Eliminar
        </div>
      </div>
    </div>
  );
};

export default CardAdminEvent;
