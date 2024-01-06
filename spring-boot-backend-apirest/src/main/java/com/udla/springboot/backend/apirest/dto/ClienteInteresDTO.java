package com.udla.springboot.backend.apirest.dto;

import java.util.Date;

public class ClienteInteresDTO {
	private Long id;
	private Date createAt;
	private Long clienteId;
	private Long interesId;
	private Integer ponderacion;

	// Getters y setters
	// ...

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Long getClienteId() {
		return clienteId;
	}

	public void setClienteId(Long clienteId) {
		this.clienteId = clienteId;
	}

	public Long getInteresId() {
		return interesId;
	}

	public void setInteresId(Long interesId) {
		this.interesId = interesId;
	}

	public Date getCreateAt() {
		return createAt;
	}

	public void setCreateAt(Date createAt) {
		this.createAt = createAt;
	}

	public Integer getPonderacion() {
		return ponderacion;
	}

	public void setPonderacion(Integer ponderacion) {
		this.ponderacion = ponderacion;
	}

	// Sobrescribe el método toString()
	@Override
	public String toString() {
		return "ClienteInteresDTO{" +
				"id=" + id +
				", createAt=" + createAt +
				", clienteId=" + clienteId +
				", interesId=" + interesId +
				", ponderacion=" + ponderacion +
				'}';
	}
}
