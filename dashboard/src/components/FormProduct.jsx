import { useEffect, useRef, useState } from "react"
import { Button, Card, CardBody, CardHeader, CardTitle, Form, FormLabel } from "react-bootstrap"
import { createProduct, getBrands, getCategories, getSections, updateProduct } from "../services/products"
import PropTypes from "prop-types";

export const FormProduct = ({
    setProducts,
    formValues,
    setFormValues,
    products,
}) => {

    const [data, setData] = useState({
        brands: [],
        sections: [],
        categories: [],
        loading: true
    });

    const imgPrev = useRef(null);
    const btnPrev = useRef(null);
    const inputImage = useRef(null);
    const [changeImage, setChangeImage] = useState(false);

    useEffect(() => {
        const getData = async () => {
            try {
                const sections = await getSections();
                const brands = await getBrands();
                const categories = await getCategories();

                if (!sections) throw new Error('Error al traer las secciones')
                if (!brands) throw new Error('Error al traer las marcas')
                if (!categories) throw new Error('Error al traer las categorías')

                if (brands.ok && sections.ok && categories.ok) {
                    setData({
                        ...data,
                        brands: brands.data,
                        sections: sections.data,
                        categories: categories.data,
                        loading: false
                    })
                }

            } catch (error) {
                console.error
            }
        };
        getData()
    }, []);

    const handleInputChange = ({ target }) => {
        setFormValues({
            ...formValues,
            [target.name]: target.value
        })
    };

    const handleCleanForm = () => {

        setFormValues({
            brandId: '',
            sectionId: '',
            model: '',
            color: '',
            year: 0,
            description: '',
            discount: 0,
            price: 0,
            technicalSpecifications: '',
            categoryId: ''
        });

        btnPrev.current.classList.remove('fa-sync-alt');
        imgPrev.current.src = "/images/producto-sin-imagen.png";
        setChangeImage(false)
    }

    const handleSubmitForm = async (event) => {
        event.preventDefault();

        if (formValues.id) {
            const result = await updateProduct(formValues, formValues.id);

            const productsUpdated = products.map((product) => {
                if (product.id === formValues.id) {
                    product = result.data;
                }
                return product;
            });

            setProducts(productsUpdated);
        } else {
            const result = await createProduct(formValues);
            setProducts([...products, result.data]);
        }
        handleCleanForm();
    };

    const handleImagePrev = ({ target }) => {
        setFormValues({
            ...formValues,
            [target.name]: target.files[0],
        });

        setChangeImage(true)
        btnPrev.current.classList.add("fa-sync-alt")

    };

    return (
        <Card>
            <CardHeader>
                <CardTitle>{formValues.id ? "Editar" : "Agregar"} Producto</CardTitle>
            </CardHeader>
            <CardBody>
                <Form
                    className="row"
                    onSubmit={handleSubmitForm}
                >
                    <div className="d-flex mb-3 col-12">

                        <div
                            className="mr-2 d-flex flex-column justify-content-center position-relative"
                            style={{ height: "100px" }}
                        >
                            <img
                                src={changeImage ? URL.createObjectURL(formValues.image) : formValues.id ? formValues.image : "/images/producto-sin-imagen.png"} 
                                alt=""
                                height={150}
                                width={100}
                                style={{ objectFit: "cover" }}
                                ref={imgPrev}
                            />
                            <FormLabel
                                htmlFor="file"
                                className="rounded rounded-circle btn btn-sm btn-primary"
                                style={{
                                    width: 32,
                                    position: "absolute",
                                    bottom: "-15px",
                                    right: "-5px",
                                    cursor: "pointer",
                                }}
                            >
                                <i ref={btnPrev} className={`fas ${formValues.id && formValues.image ? 'fa-sync-alt' : 'fa-plus'} `}></i>
                                <input
                                    ref={inputImage}
                                    type="file"
                                    hidden id="file"
                                    name="image"
                                    onChange={handleImagePrev} />

                            </FormLabel>

                        </div>
                    </div>
                    <Form.Group
                        className="mb-3 col-12"
                    >
                        <Form.Label>Marca</Form.Label>
                        <Form.Select
                            className="form-control"
                            name="brandId"
                            onChange={handleInputChange}
                        >
                            {data.loading ? (
                                <option hidden defaultValue>
                                    Cargando...
                                </option>
                            ) : (
                                <>
                                    <option hidden defaultValue>
                                        Seleccione...
                                    </option>
                                    {data.brands.map(({ id, name }) => (
                                        <option key={id} value={id}>
                                            {name}
                                        </option>
                                    ))}
                                </>
                            )}
                        </Form.Select>
                    </Form.Group>
                    <Form.Group
                        className="mb-3 col-12"
                    >
                        <Form.Label>Sección</Form.Label>
                        <Form.Select
                            className="form-control"
                            name="sectionId"
                            onChange={handleInputChange}>
                            {data.loading ? (
                                <option hidden defaultValue>
                                    Cargando...
                                </option>
                            ) : (
                                <>
                                    <option hidden defaultValue>
                                        Seleccione...
                                    </option>
                                    {data.sections.map(({ id, name }) => (
                                        <option key={id} value={id}>
                                            {name}
                                        </option>
                                    ))}
                                </>
                            )}
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3 col-12">
                        <Form.Label>Modelo</Form.Label>
                        <Form.Control
                            type="text"
                            name="model"
                            onChange={handleInputChange}
                        />

                    </Form.Group>
                    <Form.Group className="mb-3 col-12">
                        <Form.Label>Color</Form.Label>
                        <Form.Control
                            type="text"
                            name="color"
                            onChange={handleInputChange}
                        />

                    </Form.Group>
                    <Form.Group className="mb-3 col-12">
                        <Form.Label>Año de lanzamiento</Form.Label>
                        <Form.Control
                            type="date"
                            name="year"
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3 col-12">
                        <Form.Label>Descripción</Form.Label>
                        <Form.Control
                            as={'textarea'}
                            rows={3}
                            name="description"
                            onChange={handleInputChange}
                        />

                    </Form.Group>
                    <Form.Group className="mb-3 col-12">
                        <Form.Label>Descuento</Form.Label>
                        <Form.Control
                            type="number"
                            name="discount"
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3 col-12">
                        <Form.Label>Precio</Form.Label>
                        <Form.Control
                            type="number"
                            name="price"
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3 col-12">
                        <Form.Label>Especificaciones técnicas</Form.Label>
                        <Form.Control
                            type="text"
                            name="technicalSpecifications"
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3 col-12">
                        <Form.Label>Categoría</Form.Label>
                        <Form.Select
                            className="form-control"
                            name="categoryId"
                            onChange={handleInputChange}>
                            {data.loading ? (
                                <option hidden defaultValue>
                                    Cargando...
                                </option>
                            ) : (
                                <>
                                    <option hidden defaultValue>
                                        Seleccione...
                                    </option>
                                    {data.categories.map(({ id, name }) => (
                                        <option key={id} value={id}>
                                            {name}
                                        </option>
                                    ))}
                                </>
                            )}
                        </Form.Select>
                    </Form.Group>
                    <div className="d-flex justify-content-around w-100">
                        <Button
                            type="button"
                            className="py-0"
                            variant="outline-secondary"
                            onClick={handleCleanForm}
                        >
                            Cancelar
                        </Button>
                        <Button type="submit" variant="outline-dark">
                            Guardar
                        </Button>
                    </div>
                </Form>
            </CardBody>
        </Card>
    );
};

FormProduct.propTypes = {
    formValues: PropTypes.object,
    setFormValues: PropTypes.func,
    products: PropTypes.array,
    setProducts: PropTypes.func,
};