import React from 'react'
import * as DATA from '../json/data.js'

export function ComponentTest() {
  return (
    <>
      <div class="flex items-center justify-center min-h-screen bg-gray-900">
        <div class="col-span-12">
          <div class="overflow-auto lg:overflow-visible ">
            <table class="table text-gray-400 border-separate space-y-6 text-sm">
              <thead class="bg-gray-800 text-gray-500">
                <tr>
                  <th class="p-3">Brand</th>
                  <th class="p-3 text-left">Category</th>
                  <th class="p-3 text-left">Price</th>
                  <th class="p-3 text-left">Status</th>
                  <th class="p-3 text-left">Action</th>
                </tr>
              </thead>
              <tbody>
                {DATA.data.map((data, key) => {
                  return (
                    <tr key={key} class="bg-gray-800">
                      <td class="p-3">
                        <div class="flex align-items-center">
                          <div class="ml-3">
                            <div class="">{data.name}</div>
                            <div class="text-gray-500">mail@rgmail.com</div>
                          </div>
                        </div>
                      </td>
                      <td class="p-3">
                        Technology
                      </td>
                      <td class="p-3 font-bold">
                        200.00$
                      </td>
                      <td class="p-3">
                        <span class="bg-green-400 text-gray-50 rounded-md px-2">available</span>
                      </td>
                      <td class="p-3 ">
                        <a href="#" class="text-gray-400 hover:text-gray-100 mr-2">
                          <i class="material-icons-outlined text-base">visibility</i>
                        </a>
                        <a href="#" class="text-gray-400 hover:text-gray-100  mx-2">
                          <i class="material-icons-outlined text-base">edit</i>
                        </a>
                        <a href="#" class="text-gray-400 hover:text-gray-100  ml-2">
                          <i class="material-icons-round text-base">delete_outline</i>
                        </a>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}
