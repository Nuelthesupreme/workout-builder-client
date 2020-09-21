import React, { useState } from "react";
import { Container, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import LibraryCard from "../components/libraryCard/LibraryCard";

const Library = () => {
  return (
    <div class="row">
      <div class="col-sm-6">
        <LibraryCard />
      </div>
      <div class="col-sm-6">
        <LibraryCard />
      </div>
      <div class="col-sm-6">
        <LibraryCard />
      </div>
    </div>
  );
};

export default Library;
