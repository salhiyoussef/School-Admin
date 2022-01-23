import React, { useState } from 'react'
import { Line, Bar } from 'react-chartjs-2'
import { Switch, Modal } from 'antd'
export default function Dashboard() {
    const [checked, setChecked] = useState(false)
    const data = {
        data: {
            labels: ["1", "2", "3", "4", "5", "6", "7"],
            datasets: [
                {
                    label: "Paiements",
                    backgroundColor: "rgba(255, 0, 255, 0.75)",
                    data: [4, 5, 21, 2, 12, 4, 2]
                },
                {
                    label: "Elèves",
                    backgroundColor: "rgba(0, 255, 255, 0.75)",
                    data: [6, 8, 30, 10, 20, 6, 2]
                }
            ]
        }
    }
    const handleClick = () => {
        if (!checked) {
            setChecked(true)
        } else {
            setChecked(false)
        }
    }
    return (
        <div style={{ position: "absolute", width: 1500, height: 600 }}>
            <Switch checkedChildren="Line" unCheckedChildren="Bar" onClick={handleClick} checked={checked} />
            {
                (checked) ? <Line options={{responsive: true}}data={data.data}/> : 
                            <Bar options={{responsive: true}}data={data.data}/>
            }

        </div>
    )
}
