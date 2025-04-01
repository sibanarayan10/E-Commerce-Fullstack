import React, { useEffect, useState } from "react";
import { LogOut, X, Loader2 } from "lucide-react";
import axios from "axios";

function ConfirmationPopup({ setLogout, message, id }) {
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(true);
  const [loading, setLoading] = useState(false);
  const [other, setOther] = useState(false);

  const handleClick = async () => {
    setLoading(true);
    if (message == "Logout") {
      try {
        const response = await axios.get(
          `http://localhost:3001/api/user/${id}`,
          {
            headers: {
              "Content-Type": "application/json",
            },
            withCredentials: true,
          }
        );
        if (response.status >= 200 && response.status < 300) {
          window.location.href = "/sign-in";
          setLoading(false);
        }
        setShowLogoutConfirm(false);
      } catch (error) {
        setLoading(false);
      }
    } else if (message == "Delete Account") {
      try {
        const response = await axios.delete(
          "http://localhost:3001/api/user/delete",
          {
            headers: {
              "Content-Type": "application/json",
            },
            withCredentials: true,
          }
        );
        if (response.status >= 200 && response.status < 300) {
          window.location.href = "/sign-up";
          setLoading(false);
        }
      } catch (error) {
        setLoading(false);
      }
    } else {
      window.location.href = "/sign-in";
    }
  };
  useEffect(() => {
    if (message !== "Logout" && message !== "Delete Account") {
      setOther(true);
    }
  });
  return (
    showLogoutConfirm && (
      <div className="bg-white rounded-lg p-6 max-w-sm w-full mx-4  drop-shadow-lg shadow-gray-500">
        {!other && (
          <button
            onClick={() => {
              setShowLogoutConfirm(false), setLogout(false);
            }}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 cursor-pointer"
          >
            <X size={20} />
          </button>
        )}
        <div className="text-center">
          {!other && (
            <>
              <LogOut className="mx-auto h-12 w-12 text-gray-400 mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2 ">
                Confirm {`${message == "Logout" ? "Logout" : "Delete"}`}
              </h3>
            </>
          )}
          <p className="text-sm text-gray-500 mb-6">
            {message == "Logout" &&
              "Are you sure you want to log out of your account"}
            {message == "Delete Account" &&
              "Are you sure you want to delete account"}
            Login first to continue
          </p>
          <div className="flex gap-3 justify-center">
            {!other && (
              <button
                onClick={() => {
                  setShowLogoutConfirm(false), setLogout(false);
                }}
                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors
              cursor-pointer"
              >
                Cancel
              </button>
            )}

            <button
              onClick={handleClick}
              className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors flex items-center justify-center cursor-pointer"
            >
              {loading ? (
                <Loader2 className="animate-spin" size={24}></Loader2>
              ) : (
                message
              )}
            </button>
          </div>
        </div>
      </div>
    )
  );
}

export default ConfirmationPopup;
