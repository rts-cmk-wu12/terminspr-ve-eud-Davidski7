"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AfmeldButton({ activityId, token, userId }) {
    const [showConfirm, setShowConfirm] = useState(false);
    const router = useRouter();


    async function
        PressureAfmeld(event) {
        event.stopPropagation();
        event.preventDefault();


        await fetch(`http://localhost:4000/api/v1/users/${userId}/activities/${activityId}`, {
            method: "DELETE",
            headers: {
                "Authorization": "Bearer " + token
            }
        });

        setShowConfirm(false);
        router.refresh();
    }

    function openConfirm(event) {
        event.stopPropagation();
        event.preventDefault();
        setShowConfirm(true);
    }

    function closeConfirm(event) {
        event.stopPropagation();
        event.preventDefault();
        setShowConfirm(false);
    }

    return (
        <>
            <button
                className="forside_knap"
                onClick={openConfirm}
            >
                Afmeld
            </button>

            {showConfirm && (
                <div className="overlay" onClick={closeConfirm}>
                    <div className="overlay_content" onClick={(event) => event.stopPropagation()}>
                        <p>Er du sikker på, at du vil afmelde dig?</p>
                        <div className="overlay_actions">
                            <button className="forside_knap" onClick={PressureAfmeld}>
                                Ja
                            </button>
                            <button className="forside_knap" onClick={closeConfirm}>
                                Nej
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
