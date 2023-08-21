const ChildrenExample = ({ children }) => {
    return (
        <header style={{ background: 'red' }}>

            <h3>Aquí debajo van los "children":</h3>

            {children}

        </header>
    )
}

export default ChildrenExample