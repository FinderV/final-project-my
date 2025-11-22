function Buttons({filteredTechnics}) {
    return(<div className="cont">
        <button className="change" onClick={() => filteredTechnics("phones")}>Phones</button>
        <button className="change" onClick={() => filteredTechnics("laptops")}>Laptops</button>
        <button className="change" onClick={() => filteredTechnics("tablets")}>Tablets</button>
        <button className="change" onClick={() => filteredTechnics("accessories")}>Accessories</button>
    </div>)
}

export default Buttons;