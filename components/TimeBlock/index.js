import { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
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
import { formatWithValidation } from "next/dist/next-server/lib/utils";

const setSchedule = async (data) =>
  axios({
    method: "post",
    url: "/api/schedule",
    data: {
      ...data,
      username: window.location.pathname.replace("/", ""),
    },
  });

const ModalTimeBlock = ({
  isOpen,
  onClose,
  onComplete,
  isSubmitting,
  children,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Faça sua Reserva</ModalHeader>
        <ModalCloseButton />
        <ModalBody>{children}</ModalBody>

        <ModalFooter>
          {!isSubmitting && (
            <Button variant="ghost" onClick={onClose}>
              Cancelar
            </Button>
          )}
          <Button
            colorScheme="blue"
            mr={3}
            onClick={onComplete}
            isLoading={isSubmitting}
          >
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
    isSubmitting,
  } = useFormik({
    onSubmit: async (values) => {
      try {
        await setSchedule({ ...values, when: time });
        toggle();
      } catch (error) {
        console.log(error);
      }
    },
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
        isSubmitting={isSubmitting}
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
            disabled={isSubmitting}
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
            disabled={isSubmitting}
          />
        </>
      </ModalTimeBlock>
    </Button>
  );
};
