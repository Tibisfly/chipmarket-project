import React, { useContext } from "react";
import { Link } from "react-router-dom";
import {
  Card, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle
} from 'reactstrap';
import { Context } from "../store";

export default function(props) {
    const { store, actions } = useContext(Context)
    return (
        <div className="container">
            <Card>
                <CardBody>
          <CardTitle tag="h5">Nombre del comercio</CardTitle>
          <Link to="#">
          <CardSubtitle tag="h6" className="mb-2 text-muted">Dirección del</CardSubtitle>
          </Link>
        </CardBody>
        <img width="100%" src="https://picsum.photos/id/1025/367/267" alt="Card image cap" />
        <CardBody>
          <CardText>Información del producto.</CardText>
          <CardLink href="#">Like? Falta definir</CardLink>
          <CardLink href="#">Añadir al carrito</CardLink>
        </CardBody>
            </Card>
        </div>
    );
}