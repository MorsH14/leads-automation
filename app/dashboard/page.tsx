"use client";

import { useEffect, useState } from "react";

export default function Dashboard() {
    const [leads, setLeads] = useState([]);


    useEffect(() => {
        fetch("/api/leads")
            .then((res) => res.json())
            .then((data) => setLeads(data));
    }, []);

    return (
        <div className="p-10">
            <h1 className="text-2xl font-bold mb-4">Captured Leads</h1>

            <table className="w-full border">
                <thead>
                    <tr className="border">
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                    </tr>
                </thead>
                <tbody>
                    {leads.map((lead: any, index) => (
                        <tr key={index} className="border text-center">
                            <td>{lead.name}</td>
                            <td>{lead.email}</td>
                            <td>{lead.phone}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}