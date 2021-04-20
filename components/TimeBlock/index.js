import { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/react";
import { Input } from "../Input";

const ModalTimeBlock = ({ isOpen, onClose, onComplete, children }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Faça sua Reserva</ModalHeader>
        <ModalCloseButton />
        <ModalBody>{children}</ModalBody>

        <ModalFooter>
          <Button variant="ghost" onClick={onClose}>
            Cancelar
          </Button>
          <Button colorScheme="blue" mr={3} onClick={onComplete}>
            Reservar Horário
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export const TimeBlock = ({ time }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen((prevState) => !prevState);

  const {
    values,
    handleSubmit,
    handleChange,
    handleBlur,
    errors,
    touched,
  } = useFormik({
    onSubmit: (values) => {},
    initialValues: {
      name: "",
      phone: "",
    },
    validationSchema: yup.object().shape({
      name: yup.string().required("Preenchimento obrigatório"),
      phone: yup.string().required("Preenchimento obrigatório"),
    }),
  });

  return (
    <Button p={8} bg="blue.500" color="white" onClick={toggle}>
      {time}
      <ModalTimeBlock
        isOpen={isOpen}
        time={time}
        onClose={toggle}
        onComplete={handleSubmit}
      >
        <>
          <Input
            name="name"
            label="Nome:"
            touched={touched.name}
            error={errors.name}
            value={values.name}
            placeholder="Digite seu Nome"
            size="lg"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <Input
            name="phone"
            label="Telefone:"
            error={errors.phone}
            value={values.phone}
            placeholder="(11) 9 9999-9999"
            size="lg"
            mt={4}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </>
      </ModalTimeBlock>
    </Button>
  );
};
