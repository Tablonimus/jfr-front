import React from "react";
import jfr1 from "../assets/images/jfr-edit.png";

export default function Dates() {
  return (
    <div className="flex flex-col gap-10 text-center">
      <h3 className="text-4xl font-bold z-50 mt-10">NEXT DATES</h3>
      <section className="h-[30rem]">
        <div className="lg:px-56 flex justify-center h-full">
          <div className="flex flex-col overflow-y-scroll w-1/2 p-2">
            <ul className="flex flex-col gap-3">
              <li>
                <div className="border border-white rounded-lg p-4 flex flex-col gap-4">
                  <div>
                    <h5>Las palapas</h5>
                    <p>Mendoza - Argentina</p>
                    <p>Domingo 15 - 18:00hr </p>
                  </div>
                  <div>
                    <button className="border border-white rounded-lg p-2 text-sm">
                      GET TICKETS
                    </button>
                  </div>
                </div>
              </li>
              <li>
                <div className="border border-white rounded-lg p-4 flex flex-col gap-4">
                  <div>
                    <h5>Las palapas</h5>
                    <p>Mendoza - Argentina</p>
                    <p>Domingo 15 - 18:00hr </p>
                  </div>
                  <div>
                    <button className="border border-white rounded-lg p-2 text-sm">
                      GET TICKETS
                    </button>
                  </div>
                </div>
              </li>
              <li>
                <div className="border border-white rounded-lg p-4 flex flex-col gap-4">
                  <div>
                    <h5>Las palapas</h5>
                    <p>Mendoza - Argentina</p>
                    <p>Domingo 15 - 18:00hr </p>
                  </div>
                  <div>
                    <button className="border border-white rounded-lg p-2 text-sm">
                      GET TICKETS
                    </button>
                  </div>
                </div>
              </li>
              <li>
                <div className="border border-white rounded-lg p-4 flex flex-col gap-4">
                  <div>
                    <h5>Las palapas</h5>
                    <p>Mendoza - Argentina</p>
                    <p>Domingo 15 - 18:00hr </p>
                  </div>
                  <div>
                    <button className="border border-white rounded-lg p-2 text-sm">
                      GET TICKETS
                    </button>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <img src={jfr1} alt="" className="w-1/2 grayscale object-cover" />
        </div>
      </section>
    </div>
  );
}
