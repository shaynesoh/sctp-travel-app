import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
// import Autocomplete from "react-google-autocomplete";
// import { useParams } from "react-router-dom";
// import ReactGoogleAutocomplete from "react-google-autocomplete";
import ItineraryService from "../api/ItineraryControllerAPI";
import Select from "react-select";

function EditSubItemModal({
  show,
  subItemToEdit, // object (dest/accom/tpt)
  itineraryItemId,
  subItemType, // type of item (dest/accom/tpt) string
  itineraryId,
  handleClose,
  fetchData,
}) {
  const [subItemList, setSubItemList] = useState([]);
  const [subItem, setSubItem] = useState(subItemToEdit); // set to the object

  useEffect(() => {
    const fetchSubItems = async () => {
      const subItems = await ItineraryService.getAllSubItems(subItemType);
      setSubItemList(subItems); // get a list for options
    };

    const setExistingItem = async () => {
      if (itineraryItemId) {
        const existingItem = await ItineraryService.getItineraryItem(
          itineraryItemId
        );
        setSubItem(existingItem[subItemType]);
      }
    };

    fetchSubItems();
    setExistingItem();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const existingItem = itineraryItemId
      ? await ItineraryService.getItineraryItem(itineraryItemId)
      : null;

    if (!existingItem) {
      const newItineraryItem = {
        itinerary: { id: itineraryId },
        [subItemType]: subItem,
        startDate: new Date(),
        endDate: new Date(),
      };
      console.log(newItineraryItem);
      await ItineraryService.createItineraryItem(newItineraryItem)
        .then(() => {
          fetchData();
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      const updatedItineraryItem = {
        ...existingItem,
        [subItemType]: subItem,
      };

      console.log(updatedItineraryItem);
      await ItineraryService.updateItineraryItem(
        itineraryItemId,
        updatedItineraryItem
      )
        .then(() => {
          fetchData();
        })
        .catch((error) => {
          console.log(error);
        });
    }

    handleClose();
  };

  const handleChange = (selectedOption) => {
    setSubItem(selectedOption);
  };

  return (
    <>
      <div className="row mx-auto">
        <Modal centered show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>
              {subItemToEdit
                ? `Edit ${subItemType
                    .charAt(0)
                    .toUpperCase()}${subItemType.slice(1)}`
                : `Add a new ${subItemType
                    .charAt(0)
                    .toUpperCase()}${subItemType.slice(1)}`}
            </Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <form onSubmit={handleSubmit}>
              <div className="row mb-3">
                <div className="row-md-4">
                  <div className="form-floating mb-3">
                    {subItem?.image && (
                      <img
                        type="text"
                        alt=""
                        className=" w-100 img-thumbnail"
                        style={{
                          height: "16rem",
                          objectFit: "cover",
                        }}
                        placeholder="Image URL"
                        src={subItem?.image}
                      />
                    )}
                  </div>
                </div>
                <div className="row-md-8 flex-row">
                  <div className="form-floating mb-3">
                    <Select
                      required
                      className=""
                      options={subItemList}
                      getOptionValue={(option) => option}
                      value={subItem}
                      placeholder={`${subItemType
                        .charAt(0)
                        .toUpperCase()}${subItemType.slice(1)} Name`}
                      noOptionsMessage={() => "No results"}
                      getOptionLabel={(option) => option?.name}
                      onChange={(selectedOption) =>
                        handleChange(selectedOption)
                      }
                    />
                  </div>
                  <div
                    className={`form-floating mb-3 ${
                      !subItem?.price && "col-md-12"
                    }`}
                  >
                    <input
                      type="text"
                      required
                      className="form-control text-truncate"
                      placeholder="Description"
                      value={subItem?.description}
                      readOnly
                      onChange={(e) =>
                        setSubItem({ ...subItem, description: e.target.value })
                      }
                    />
                    <label>Description</label>
                  </div>
                  {subItem?.price != null && subItem?.price != undefined && (
                    <div className="form-floating mb-3">
                      <input
                        type="number"
                        required
                        className="form-control"
                        placeholder="Price"
                        readOnly
                        value={subItem?.price.toFixed(2)}
                      />
                      <label>Price</label>
                    </div>
                  )}
                </div>
              </div>
              <button
                className="btn btn-primary text-white w-100"
                type="submit"
              >
                Update {subItemType}
              </button>
            </form>
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
}

export default EditSubItemModal;