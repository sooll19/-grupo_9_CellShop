import { MetricItem } from './MetricItem'

const data = [
    {
        id: crypto.randomUUID(),
        color: "success",
        title: "Productos en stock",
        value: 30,
        icon: "fa-mobile"
    },
    {
        id: crypto.randomUUID(),
        color: "warning",
        title: "Usuarios registrados",
        value: 5,
        icon: "fa-user"
    },
    {
        id: crypto.randomUUID(),
        color: "danger",
        title: "Marcas comercializadas",
        value: 10,
        icon: "fa-list"
    }
]

export const Metrics = () => {
    return (
        <div className="col-12">
            <div className="row">
                {data.map(({ color, title, value, icon, id }) => (
                    <MetricItem
                        key={id}
                        color={color}
                        title={title}
                        value={value}
                        icon={icon}
                    />
                ))}
            </div>
        </div>
    )
}
