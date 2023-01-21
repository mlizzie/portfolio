package com.sa.web.dto;

public class projectDto {
    
    private String name;
    private String gitUrl;
    private String description;
    private String imageUrl;

    public projectDto() {
    }

    public projectDto(String name, String gitUrl, String description, String imageUrl) {
        this.name = name;
        this.gitUrl = gitUrl;
        this.description = description;
        this.imageUrl = imageUrl;
    }
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getGitUrl() {
        return gitUrl;
    }

    public void setGitUrl(String gitUrl) {
        this.gitUrl = gitUrl;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    @Override
    public String toString() {
        return "projectDto{" +
                "name='" + name + '\'' +
                ", gitUrl='" + gitUrl + '\'' +
                ", description='" + description + '\'' +
                ", imageUrl='" + imageUrl + '\'' +
                '}';
    }
}
