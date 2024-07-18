import { Edit2, Trash, Add, SearchNormal } from "iconsax-react";
import styles from "../../../styles/Home.module.css";
import ConfirmDialog from "../../../src/components/common/ConfirmDialog";
import {
  CAlert,
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CFormInput,
  CFormSelect,
  CHeader,
  CModal,
  CModalBody,
  CModalFooter,
  CModalTitle,
  CPagination,
  CPaginationItem,
  CRow,
  CSpinner,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from "@coreui/react";
import EventCategoryForm from "./form";
import useModalTrigger from "../../../src/hooks/useModalTrigger";
import Link from "next/link";
import { useRouter } from "next/router";
import Search from "../../../src/components/common/Search";
import useSWR from "swr";

const category_list = [
  {
    id: 1,
    category_name: "Seminar",
    category_status: "Active",
  },
  {
    id: 2,
    category_name: "Peluncuran Produk",
    category_status: "Active",
  },
  {
    id: 3,
    category_name: "Pameran",
    category_status: "Active",
  },
  {
    id: 4,
    category_name: "Webinar",
    category_status: "Unused",
  },
  {
    id: 5,
    category_name: "Konferensi",
    category_status: "Active",
  },
  {
    id: 6,
    category_name: "Konser",
    category_status: "Active",
  },
  {
    id: 7,
    category_name: "Workshop",
    category_status: "Active",
  },
];
const url = "/api/event-management/event-categories/";
const fetcher = (...args) => fetch(...args).then((res) => res.json());

async function handleRemove(id) {
  //console.log("Delete TEST, no actual delete yet. ID: " + id);
  const response = await fetch(url + id, { method: "DELETE" });
}

export default function EventCategories({ repo }) {
  //Modal trigger
  const { modalVisibility, toggleModal } = useModalTrigger();
  const {
    modalVisibility: confirmVis,
    toggleModal: toggleConfirm,
    forceFalse,
  } = useModalTrigger();
  const router = useRouter();
  let isCreateMode = !router.query.id;
  //Fetched data from backend as variable
  const { data, error, isLoading } = useSWR(url, fetcher);

  if (error) return <div>failed to load: $(error)</div>;
  if (isLoading) return <CSpinner />;

  return (
    <div className={styles.container}>
      <ConfirmDialog
        visible={confirmVis}
        onClose={() => {
          forceFalse();
          router.replace("/event-management/event-categories", undefined, {
            shallow: true,
          });
        }}
        onApprove={() => {
          handleRemove(router.query.id);
          forceFalse();
        }}
        title="Remove"
        body="Are you sure you want to remove this data ?"
      />
      {/* <CAlert color="primary" dismissible></CAlert> */}
      <CCard className="mb-4">
        <CCardHeader className="d-md-flex justify-content-between">
          <strong>Event Categories Table</strong>
          <CButton
            color="primary"
            onClick={() => {
              toggleModal();
            }}
          >
            <Add className="icon" /> New...
          </CButton>
          {/* Form Modal */}
          <CModal
            visible={modalVisibility}
            // onClose={(event) => toggleModal(event)}
            aria-labelledby="Event Categories Input Form"
          >
            <CHeader>
              <CModalTitle>
                {isCreateMode
                  ? "Input into Event Categories"
                  : "Edit Value of Event Categories"}
              </CModalTitle>
            </CHeader>
            <CModalBody>
              <EventCategoryForm isCreateMode={isCreateMode} />
            </CModalBody>
            <CModalFooter>
              <CButton
                color="secondary"
                form="EventCategoriesForm"
                onClick={() => {
                  toggleModal();
                  router.replace(
                    "/event-management/event-categories",
                    undefined,
                    { shallow: true }
                  );
                }}
              >
                Close
              </CButton>
            </CModalFooter>
          </CModal>
        </CCardHeader>
        <CCardBody>
          {/* Limit and Search */}
          <CRow className="d-md-flex justify-content-between mb-3">
            <CCol className="d-flex gap-2 align-items-center" xs={2}>
              Show
              <CFormSelect
                width={"50%"}
                aria-label="Limits displayed entries."
                options={[
                  { label: "10", value: "10" },
                  { label: "25", value: "25" },
                  { label: "50", value: "50" },
                  { label: "100", value: "100" },
                ]}
              />
              Entries
            </CCol>
            {/* <CCol className="d-flex gap-2 align-items-center" xs={4}>
                <SearchNormal /> Search
                <CFormInput
                  type="text"
                  onChange={(e) => handleSearch(e.target.value)}
                />
              </CCol> */}
            <Search />
          </CRow>
          {/* Table */}
          <CTable striped hover small>
            <CTableHead>
              <CTableRow>
                <CTableHeaderCell scope="col">#id</CTableHeaderCell>
                <CTableHeaderCell scope="col">Category Name</CTableHeaderCell>
                <CTableHeaderCell scope="col">Status</CTableHeaderCell>
                <CTableHeaderCell scope="col">Action</CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              {data &&
                data.map(({ id, categoryName, status }) => (
                  <CTableRow key={id}>
                    <CTableDataCell scope="row">{id}</CTableDataCell>
                    <CTableDataCell>{categoryName}</CTableDataCell>
                    <CTableDataCell>
                      {status ? "Active" : "Unused"}
                    </CTableDataCell>
                    <CTableDataCell className="d-flex gap-3">
                      <Link href={{ query: { id: id } }} passHref>
                        <CButton
                          color="primary"
                          onClick={() => {
                            toggleModal();
                            //setEditTargetId(id);
                          }}
                        >
                          <Edit2 size="16" color="#fff" />
                        </CButton>
                      </Link>
                      <CButton
                        color="danger"
                        onClick={() => {
                          router.push({ query: { id: id } }, undefined, {
                            shallow: true,
                          });
                          toggleConfirm();
                        }}
                      >
                        <Trash size="16" color="#fff" />
                      </CButton>
                    </CTableDataCell>
                  </CTableRow>
                ))}
            </CTableBody>
          </CTable>
        </CCardBody>
        <CCardFooter className="d-md-flex justify-content-between">
          {data && (
            <div
              className="align-self-start text-medium-emphasis small"
              id="entrynumber_info"
              role="entries_status"
              aria-live="polite"
            >
              Showing 1 to 10 of {data.length} entries
            </div>
          )}
          <CPagination className="pagination justify-content-end align-self-end">
            <CPaginationItem>Previous</CPaginationItem>
            <CPaginationItem>1</CPaginationItem>
            <CPaginationItem>2</CPaginationItem>
            <CPaginationItem>3</CPaginationItem>
            <CPaginationItem>Next</CPaginationItem>
          </CPagination>
        </CCardFooter>
      </CCard>
    </div>
  );
}
